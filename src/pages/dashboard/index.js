import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

import api from '../../api/inhome';

import SuperiorBar from '../../components/SuperiorBar';
import SideBar from '../../components/SideBar';
import AmbientCard from '../../components/AmbientCard';
import Sensor from '../../components/Sensor';
import Chart from '../../components/Chart';

import { addData, createChart, removeData } from '../../utils/chart';


import 
{ Container,
  Wrapper,
  SensorsData,
  DataWrapper,
  AmbientsList,
  Sensors,
  SensorTitle,
  SensorList,
  GraphsData,
  Charts,
  Main, 
  MapData
} from './styles';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { convertToHourMinutes } from '../../utils/generateDate';

const LocalMap = dynamic(() => import( '../../components/LocalMap'), {
  ssr: false
});

function Dashboard( props ) {
  const [devices, setDevices] = useState(null);
  const [lastSensorData, setLastData] = useState(null);
  const charts = useRef(null);
  const [selectedDevice, setDevice] = useState(0);

  useEffect(() => {
    async function fetchInicialData() {
      const devices = await api.get('/devices');
      setDevices(devices.data);
    }

    const SERVER = 'http://localhost:3333';
    const socket = io(SERVER);
    socket.on('update_data', (lastData) => {
      const { sensors, updated_at } = lastData;
      const lastUpdate = convertToHourMinutes(updated_at);
      console.log(lastUpdate)
      const analogSensors = sensors.filter((sensor) => sensor.type === "current");
      if(!charts.current) {
        const sensorsChart = analogSensors.map((sensor) => createChart('corrente', 'Consumo de corrente do ar-condicionado'));
        charts.current = { sensorsChart, update: true };
      } else {
        if(charts.current.update) {
          charts.current.sensorsChart.forEach(({ chart }, index) => {
            if(chart.data.labels.length-1 > 15) removeData(chart)
            addData(chart, lastUpdate, analogSensors[0].value);
          });
          charts.current.update = false;
        } else {
          charts.current.update = true;
        }
      }

      setLastData(lastData);
    });
    
    fetchInicialData();

    return () => socket.disconnect();
  }, []);

  return (
    <Container>
      <Wrapper>

        <SideBar />
        <Main>
          <SuperiorBar />
          <DataWrapper>
            <SensorsData>
              <AmbientsList>
                {devices && lastSensorData && (
                  <>
                    <MdKeyboardArrowLeft size={64} color="fefefe"  onClick={() => setDevice((selectedDevice - 1 < 0) ? devices.length - 1 : selectedDevice - 1 )}/>
                    <AmbientCard 
                      ambient_title={devices[selectedDevice].ambient}
                      description={devices[selectedDevice].device_name}
                      status={devices[selectedDevice].device_id}
                      last_update={new Date(lastSensorData.updated_at).toLocaleString()}
                    />
                    <MdKeyboardArrowRight size={72} color="fefefe" onClick={() => setDevice((selectedDevice + 1 > devices.length - 1) ? 0 : selectedDevice + 1)}/>
                  </>
                )}
               
              </AmbientsList>
              <Sensors>
                <SensorTitle>Sensores</SensorTitle>
                <SensorList>
                  {lastSensorData && lastSensorData.sensors.map((sensor) => {
                      return (
                        <Sensor
                          sensor_type={sensor.type}
                          value={(sensor.state != null && (sensor.state ? 'off' : 'on')) || sensor.value}
                          ambient={sensor.pin}
                        />
                      )
                    }
                  )}
                </SensorList>
              </Sensors>
              
            </SensorsData>
            <GraphsData>
              <Charts>
                <Chart id='corrente' title='Consumo de corrente do ar-condicionado' />
              </Charts>
            </GraphsData>
          </DataWrapper>
          <MapData>
            {devices && (
              <LocalMap
                centerPosition={[-7.2394546,-35.9159146]}
                devicesPositions={devices}
              />
            )}
          </MapData>
        </Main>

      </Wrapper>
    </Container>
  )
}

export default Dashboard;
import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

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
  const [sensors, setSensors] = useState(null);
  const [lastSensorData, setLastData] = useState(null);
  const [charts, setCharts] = useState(null);
  const [selectedDevice, setDevice] = useState(0);

  useEffect(() => {
    async function fetchInicialData() {
      const devices = await api.get('/devices');
      setDevices(devices.data);
    }

    async function fetchRuntimeData() {
      if(devices) {
        const { data } = await api.get('/devices/data', {
          params: {
            device_id: devices[selectedDevice].device_id,
            device_name: devices[selectedDevice].device_name,
            device_user: devices[selectedDevice].device_user,
          }
        });

        const { sensors, updated_at } = data[0];
        const lastUpdate = convertToHourMinutes(updated_at);
        const analogSensors = sensors.filter((sensor) => sensor.type === 'a');

        if(!charts) {
          const sensorsChart = analogSensors.map((sensor) => createChart('corrente', 'Consumo de corrente do ar-condicionado'));
          setCharts(sensorsChart);
        } else {
          // chart.data.datasets[0].data = chart.data.datasets[0].data.push(analogSensors[0].item)
          charts.forEach(({ chart }, index) => {
            if(chart.data.labels.length > 15) removeData(chart)
            addData(chart, lastUpdate, Math.random()*100);
          });
        }

        setSensors(data);
        setLastData(data[0]);
      }
    }

    const requestInterval = setInterval(async() => {
      if(!devices) await fetchInicialData();
      await fetchRuntimeData();
    }, 2500);

    return () => clearInterval(requestInterval);
  });

  return (
    <Container>
      <Wrapper>

        <SideBar />
        <Main>
          <SuperiorBar />
          <DataWrapper>
            <SensorsData>
              <AmbientsList>
                <MdKeyboardArrowLeft size={64} color="fefefe" />
                {devices && lastSensorData && (
                   <AmbientCard 
                    ambient_title={devices[selectedDevice].ambient}
                    description={devices[selectedDevice].device_name}
                    status={devices[selectedDevice].device_id}
                    last_update={new Date(lastSensorData.updated_at).toLocaleString()}
                  />
                )}
               
                <MdKeyboardArrowRight size={64} color="fefefe" />
              </AmbientsList>
              <Sensors>
                <SensorTitle>Sensores</SensorTitle>
                <SensorList>
                  {lastSensorData && lastSensorData.sensors.map((sensor) => {
                      return (
                        <Sensor
                          sensor_type={sensor.type === 'a' ? 'analógico' : 'digital'}
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
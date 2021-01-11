import Link from 'next/link';
import React from 'react';

import SuperiorBar from '../../components/SuperiorBar';
import SideBar from '../../components/SideBar';
import AmbientCard from '../../components/AmbientCard';
import Sensor from '../../components/Sensor';
import Chart from '../../components/Chart';

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
  Main 
} from './styles';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function Dashboard( props ) {
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
                <AmbientCard 
                  ambient_title="LATOMIA"
                  description="Laboratório localizado no IFPB - Campus Campina Grande"
                  status="Em operacao"
                  last_update="07/01/2021"
                />
                <MdKeyboardArrowRight size={64} color="fefefe" />
              </AmbientsList>
              <Sensors>
                <SensorTitle>Main sensors</SensorTitle>
                <SensorList>
                  <Sensor
                    sensor_type="analog"
                    value="2561"
                    ambient="Assert"
                  />
                <Sensor
                  sensor_type="analog"
                  value="2561"
                  ambient="Assert"
                />
                <Sensor
                  sensor_type="analog"
                  value="2561"
                  ambient="Assert"
                />
                <Sensor
                  sensor_type="analog"
                  value="2561"
                  ambient="Assert"
                />
                <Sensor
                  sensor_type="analog"
                  value="2561"
                  ambient="Assert"
                />
                <Sensor
                  sensor_type="analog"
                  value="2561"
                  ambient="Assert"
                />
                <Sensor
                  sensor_type="analog"
                  value="2561"
                  ambient="Assert"
                />
                <Sensor
                  sensor_type="analog"
                  value="2561"
                  ambient="Assert"
                />                                                
                </SensorList>
              </Sensors>
              
            </SensorsData>
            <GraphsData>
              <Charts>
                <Chart id="chart1" title="consumo ar"/>
                <Chart id="chart2" title="consumo ar"/>
              </Charts>
            </GraphsData>
          </DataWrapper>
        </Main>

      </Wrapper>
    </Container>
  )
}

export default Dashboard;
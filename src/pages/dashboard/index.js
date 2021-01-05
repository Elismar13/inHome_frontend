import Link from 'next/link';
import React from 'react';

import SuperiorBar from '../../components/SuperiorBar';
import SideBar from '../../components/SideBar';
import AmbientCard from '../../components/AmbientCard';
import Sensor from '../../components/Sensor';

import 
{ Container,
  Wrapper,
  SensorsData,
  DataWrapper,
  AmbientsList,
  SensorTitle,
  SensorList,
  GraphsData,
  Main 
} from './styles';

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
                <AmbientCard 
                  ambient_title="teste"
                  description="lorem ipson lorem ipson lorem ipson"
                  status="Em operacao"
                />
                <AmbientCard 
                  ambient_title="teste"
                  description="lorem ipson lorem ipson lorem ipson"
                  status="Em operacao"
                />
              </AmbientsList>
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
              </SensorList>
            </SensorsData>
            <GraphsData>
              graphs
              {/* <Graph /> */}
            </GraphsData>
          </DataWrapper>
        </Main>

      </Wrapper>
    </Container>
  )
}

export default Dashboard;
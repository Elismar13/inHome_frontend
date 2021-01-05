import Link from 'next/link';
import React from 'react';

import SuperiorBar from '../../components/SuperiorBar';
import SideBar from '../../components/SideBar';
import AmbientCard from '../../components/AmbientCard';

import 
{ Container,
  Wrapper,
  SensorsData,
  DataWrapper,
  AmbientsList,
  SensorList,
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
              <SensorList>
                <Sensor />
              </SensorList>
            </SensorsData>
            <GraphsData>
              <Graph />
            </GraphsData>
          </DataWrapper>
        </Main>

      </Wrapper>
    </Container>
  )
}

export default Dashboard;
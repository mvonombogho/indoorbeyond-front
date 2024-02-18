import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";

const ColsWrapper = styled.div`
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 40px;
  margin: 40px 0;
  p{
    margin:5px;
  }
`;
const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;
export default function BlogPage(){
    return(
        <>
            <Header />
            <Center>
                <Box>
                    <ColsWrapper>
                        <h1>Coming soon !</h1>
                    </ColsWrapper>
                </Box>
            </Center>
        </>
        
    )
}


import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Textarea from "@/components/TextArea";
import Address from "@/components/icons/Address";
import Email from "@/components/icons/Email";
import Information from "@/components/icons/Information";
import Phone from "@/components/icons/Phone";
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
  margin: 20px 100px;
`;
const MapWrapper = styled.div`
  margin: 20px 100px;
`
const ContactLabel = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  svg{
    width: 16px;
    height: 16px;
  }
`
export default function ContactPage(){
    return(
        <>
            <Header />
            <MapWrapper>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.628082815473!2d36.818440794860045!3d-1.2855748186444722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d714b90b4d%3A0xf58d8f9b297c294c!2sCentral%20Business%20District%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1679699953031!5m2!1sen!2ske" 
                    width="100%" 
                    height="450" 
                    className='border-0 w-100'
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </MapWrapper>
            <Box>
                <ColsWrapper>
                    <div>
                        <h1>Contact</h1>
                        
                        <Input type="text"
                            placeholder="Name"
                            name="name"/>
                        <Input type="text"
                            placeholder="Email"
                            name="email"/>
                        <Input type="number"
                            placeholder="Mobile Number"
                            name="mobileNumber"/>
                        <Textarea>
                            Comments
                        </Textarea>
                        <Button black block>
                            Submit
                        </Button>
                    </div>
                    <div>
                        <h1>Get in touch with us</h1>
                        <ContactLabel>
                            <Address />
                            <p>P.o box 4474-00100,Nairobi</p>
                        </ContactLabel>
                        <ContactLabel>
                            <Phone />
                            <p>+254 705 584 3745</p>
                        </ContactLabel>
                        <ContactLabel>
                            <Email />
                            <p>info@indoorandbeyond.com</p>
                        </ContactLabel>
                        <ContactLabel>
                            <Information />
                            <p>Monday - Saturday 9AM-6PM</p>
                        </ContactLabel>
                    </div>
                </ColsWrapper>
            </Box>
        </>
    )
}
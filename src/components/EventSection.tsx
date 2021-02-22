import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import eventBG from "../assets/images/event-bg.png";

interface Event {
  title: string;
  date: string;
  location: string;
}

const events: Event[] = [];

const EventSectionWrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: ${({ theme }) => "1px solid " + theme.colors.secondary};
  border-bottom: ${({ theme }) => "1px solid " + theme.colors.secondary};
  background-image: url(${eventBG});
  background-position: cover;
`;

const ComingSoon = styled.span`
  opacity: 0.5;
  font-size: 2em;
  letter-spacing: 2px;
`;

const EventSection = () => (
  <EventSectionWrapper>
    <SectionTitle>NAJBLIŻSZE EVENTY</SectionTitle>
    {events.length ? (
      events.map((event) => <span>event</span>)
    ) : (
      <ComingSoon>COMING SOON</ComingSoon>
    )}
  </EventSectionWrapper>
);

export default EventSection;

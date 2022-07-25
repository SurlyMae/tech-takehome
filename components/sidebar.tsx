import {
  List,
  ListItem,
  Box,
  Divider,
  ListIcon,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHomeFilled,
  MdSearch,
  MdEditCalendar,
  MdCalendarToday,
} from "react-icons/md";
import NextImage from "next/image";
import NextLink from "next/link";

const navMenu = [
  {
    label: "Home",
    icon: MdHomeFilled,
    route: "/",
  },
  {
    label: "Events",
    icon: MdCalendarToday,
    route: "/events",
  },
  {
    label: "Search",
    icon: MdSearch,
    route: "/search",
  },
];

const createEvent = {
  label: "Create Event",
  icon: MdEditCalendar,
  route: "/",
};

const events = [
  {
    id: 1,
    label: "Rowing Camp",
    route: "/",
  },
  {
    id: 2,
    label: "Marina BBQ",
    route: "/",
  },
  {
    id: 3,
    label: "Boatyard Cleanup",
    route: "/",
  },
];

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.label}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.label}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
            <ListItem paddingX="20px" fontSize="16px" marginBottom="20px">
              <LinkBox>
                <NextLink href={createEvent.route} passHref>
                  <LinkOverlay>
                    <ListIcon
                      as={createEvent.icon}
                      color="white"
                      marginRight="20px"
                    />
                    {createEvent.label}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          </List>
          <Divider color="gray" />
          <Box height="66%" overflowY="auto" paddingY="20px">
            <List spacing={2}>
              {events.map((event) => (
                <ListItem paddingX="20px" key={event.id}>
                  <LinkBox>
                    <NextLink href={event.route} passHref>
                      <LinkOverlay>{event.label}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

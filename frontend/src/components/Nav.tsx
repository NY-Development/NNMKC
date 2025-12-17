import { Box, Text, VStack } from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom"

function Nav() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/ministries', label: 'Ministries' },
    { to: '/events', label: 'Events' },
    { to: '/sermons', label: 'Sermons' },
    { to: '/prayer-request', label: 'Prayer Request' },
    { to: '/giving', label: 'Giving' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <Box 
        as="nav" 
        p={3} 
        display="flex" 
        flexDirection="row" 
        alignItems="center" 
        justifyContent="space-between"
        bgColor="gray.800" 
        color="white"
        position="fixed"
        top={'0'}
        left={'0'}
        right={'0'}
        zIndex={10}
        width={'100%'}
      >
        <Link to="/">
          <Text fontSize="xl" fontWeight="bold">NNMKC</Text>
        </Link>
        {navLinks.map((link) => (
            <Box 
            key={link.to}
            >
            <NavLink 
                to={link.to}
            >
                {link.label}
                <Box mx={'auto'} className="active-nav" rounded={'2xl'} height={'1'} width={'5'} bgColor={'gray.400'}></Box>
            </NavLink>
            </Box>
        ))}

    </Box>
  )
}

export default Nav
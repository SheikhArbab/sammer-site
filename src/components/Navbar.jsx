import React from 'react'
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";


const Header = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <img
              src="/vite.svg"
              alt="keep"
              width="40"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Services" />
            <Navbar.Link linkName="Prices" />
            <Navbar.Link linkName="About Us" />
            <Navbar.Link linkName="Testimonial" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Services" />
            <Navbar.Link linkName="Prices" />
            <Navbar.Link linkName="About Us" />
            <Navbar.Link linkName="Testimonial" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">

          <Button size="sm" type="primary">
            Book A Call
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  )
}

export default Header

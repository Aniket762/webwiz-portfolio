import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 1rem 4em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
  &:before,
  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 0;
    height: 5%;
    transition: all 600ms 10ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    z-index: 1;
  }

  &:before {
    left: 0;
  }

  &:after {
    height: 10%;
    transition: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    width: 10%;
    right: 0;
    top: 0;
  }
  &:hover{
    color: white;
  }
  &:hover:before {
    background: linear-gradient(to right, #7f00ff, #e100ff);
    width: 100%;
    margin-left: 5%;
    margin-top: -2%;
    height: 7%;
    z-index: -1;
    border-radius: 0px;
  }

  &:hover:after {
    ${'' /* color: #fff; */}
    width: 0px;
    color: #fff;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/about">About</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/projects">Projects</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/team">Team</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/events">Events</Link>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}

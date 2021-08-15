import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
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
  top: 75px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 5px;
  transition: color 0.3s;
  position: relative;
  z-index: 1;
  text-align: center;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, #7f00ff, #e100ff);
    z-index: -1;
    transition: opacity 0.3s;
    opacity: 0;
  }

  &:hover {
    color: white;

    &::before {
      opacity: 1;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  width: 100%;
  padding: 1rem 4rem;
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
          {/* <LinkItem>
            <Link href="/projects">Projects</Link>
          </LinkItem> */}
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

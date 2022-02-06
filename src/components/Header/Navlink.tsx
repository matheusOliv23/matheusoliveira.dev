import React from 'react';
import Link from 'next/link';
import { NavlinkContainer } from './styles';
import { useRouter } from 'next/router';

interface LinkProps {
  title: string; // titulo do link
  path: string; // caminho do link
}
export default function Navlink({ title, path }: LinkProps) {
  const router = useRouter();
  const isActive = router.pathname === path; //verifica se a rota atual é igual ao caminho do link, caso seja verdade isActive será true

  return (
    <NavlinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavlinkContainer>
  );
}

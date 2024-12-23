import React from 'react';
import { Card, CardHeader } from './ui/card';

type Props = { title: string };

const Header = (props: Props) => {
  return (
    <Card className="flex items-center justify-center flex-col w-full   m-auto">
      <CardHeader className="text-center font-mono capitalize">
        {' '}
        {props.title}
      </CardHeader>
    </Card>
  );
};

export default Header;

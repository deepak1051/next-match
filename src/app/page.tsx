import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaRegSmile } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-600">Hi there</h1>
      <Button
        href="/members"
        as={Link}
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile size={20} />}
      >
        Click me!
      </Button>
    </div>
  );
}

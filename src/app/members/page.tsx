import Link from 'next/link';
import React from 'react';

export default function MembersPage() {
  return (
    <div>
      <h2 className="text-3xl">Members</h2>
      <Link href="/">Go back home</Link>
    </div>
  );
}

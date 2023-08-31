'use client';

import Form from '@/components/Form';
import Sheet from '@/components/Sheet';

export default function Page() {
  return (
    <>
      <Sheet>
        <section>
          <h1>Contact</h1>
          <p>お問い合せはこちらから</p>
          <Form />
        </section>
      </Sheet>
    </>
  );
}

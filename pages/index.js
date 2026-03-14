import dynamic from 'next/dynamic';
import Head from 'next/head';

const NexusApp = dynamic(
  () => import('../src/NexusAI'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXUS AI</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <NexusApp />
    </>
  );
}
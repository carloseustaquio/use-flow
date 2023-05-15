'use client';

import useFlow from '@/hooks/use-flow';
import styles from './page.module.css'
import firstFlow from '@/flows/first-flow.json';
import { FlowStep } from '@/hooks/flow-provider';
import { useRouter } from 'next/navigation';
import ShowFlow from '@/components/show-flow';

export default function Home() {
  const router = useRouter();
  const { startFlow } = useFlow();

  const handleGoToNextStep = () => {
    const step = startFlow(firstFlow as FlowStep, { id: '123' });

    if (step) {
      router.push(step.path);
    } 
  };

  return (
    <main className={styles.main}>
      <h1>First Page</h1>
      <button type="button" onClick={handleGoToNextStep}>Start Flow</button>
			<ShowFlow flow={firstFlow} title="Flow to be started" />
    </main>
  )
}

'use client';

import ShowFlow from "@/components/show-flow";
import useFlow from "@/hooks/use-flow";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PageB() {
	const [flow, setFlow] = useState('forward');
	const router = useRouter();
	const { getFlowStep } = useFlow();

	const toggleFlow = () => {
		setFlow(prev => prev === 'forward' ? 'jump-step' : 'forward');
	}

	const handleGoToNextStep = () => {
		const step = getFlowStep(flow);

		if (step) {
			router.push(step.path);
		}
	};

	return (
		<>
			<h1>Page B</h1>
			<button type="button" onClick={toggleFlow}>Toggle Flow: ({flow})</button>
      <button type="button" onClick={handleGoToNextStep}>Next Step</button>
			<ShowFlow />
		</>
	)
}
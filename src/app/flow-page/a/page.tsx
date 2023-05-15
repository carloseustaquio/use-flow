'use client';

import ShowFlow from "@/components/show-flow";
import useFlow from "@/hooks/use-flow";
import { useRouter } from "next/navigation";

export default function PageA() {
	const router = useRouter();
	const { getFlowStep } = useFlow();

	const handleGoToNextStep = () => {
		const step = getFlowStep();

		if (step) {
			router.push(step.path);
		}
	};

	return (
		<>
			<h1>Page A</h1>
      <button type="button" onClick={handleGoToNextStep}>Next Step</button>
			<ShowFlow />
		</>
	)
}
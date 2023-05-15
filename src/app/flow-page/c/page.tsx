'use client';

import ShowFlow from "@/components/show-flow";
import useFlow from "@/hooks/use-flow";
import { useRouter } from "next/navigation";

export default function PageC() {
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
			<h1>Page C</h1>
      <button type="button" onClick={handleGoToNextStep}>Next Step</button>
			<ShowFlow />
		</>
	)
}
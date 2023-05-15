'use client';

import ShowFlow from "@/components/show-flow";
import useFlow from "@/hooks/use-flow";
import { useParams, useRouter } from "next/navigation";

export default function PageD() {
	const router = useRouter();
	const id = useParams().id;
	const { getFlowStep } = useFlow();

	const handleGoToNextStep = () => {
		const step = getFlowStep();

		if (step) {
			router.push(step.path);
		}
	};

	return (
		<>
			<h1>Page D - ID: {id}</h1>
      <button type="button" onClick={handleGoToNextStep}>Next Step</button>
			<ShowFlow />
		</>
	)
}
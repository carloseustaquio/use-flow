'use client';

import {useCallback, useContext} from 'react';
import {FlowContext, FlowStep, ConditionalFlowStep} from './flow-provider'
import { replaceVariables } from './replace-variables';

function isConditionalFlowStep (flowStep: FlowStep | ConditionalFlowStep): flowStep is ConditionalFlowStep {
	if ('id' in flowStep && 'next' in flowStep && 'path' in flowStep) {
		return false;
	}

	return true;
}

export default function useFlow() {
	const {	activeFlow, setActiveFlow } = useContext(FlowContext);

	const getFlowStep = useCallback((conditional?: string): FlowStep | null => {
		if (!activeFlow) return null;

		if (isConditionalFlowStep(activeFlow)) {
			if (conditional	&& isConditionalFlowStep(activeFlow)) {
				const nextFlowStep = activeFlow[conditional];

				if (!nextFlowStep) {
					throw new Error(`Conditional ${conditional} does not exist on flow step ${activeFlow.id}`);
				}

				setActiveFlow(nextFlowStep.next as FlowStep);

				return nextFlowStep;
			} else {
				throw new Error(`Trying to access a conditional flow without a conditional.`)
			}
		}

		if (conditional) {
			console.warn(`Trying to access a conditional flow on a non-conditional flow step. Returning the current flow step instead.`);
		}

		setActiveFlow(activeFlow.next as FlowStep);		
		return activeFlow;
	}, [activeFlow, setActiveFlow]);

	const startFlow = (flowStep: FlowStep, variables?: Record<string, string>) => {
		let flow = flowStep;

		if (variables) {
			flow = replaceVariables(flow as any, variables) as unknown as FlowStep;
		}

		setActiveFlow(flow.next as FlowStep);
		return flowStep;
	};

	return {
		getFlowStep,
		startFlow
	}
}
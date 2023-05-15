'use client';

import {createContext, useState} from 'react';

export type Conditional = string;

export interface FlowStep {
	id: string;
	path: string;
	next: FlowStep | ConditionalFlowStep | null;
}

export type ConditionalFlowStep = Record<Conditional, FlowStep>;

export interface FlowState {
	activeFlow: FlowStep | null;
	setActiveFlow: (flow: FlowStep | null) => void;
}

const initialFlowState: FlowState = {
	activeFlow: null,
	setActiveFlow: () => {},
}

export const FlowContext = createContext(initialFlowState)

export function FlowProvider({children}: {children: React.ReactNode}) {
	const [state, setState] = useState(initialFlowState);

	const setActiveFlow = (flow: FlowStep | null) => {
		setState({
			...state,
			activeFlow: flow,
		})
	};

	return (
		<FlowContext.Provider value={{
			activeFlow: state.activeFlow,
			setActiveFlow,
		}}>
		{children}
		</FlowContext.Provider>
	)
}
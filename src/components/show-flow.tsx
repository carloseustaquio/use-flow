import { FlowContext } from "@/hooks/flow-provider";
import { useContext } from "react";

export default function ShowFlow({flow, title}: {flow?: object; title?: string}) {
	const {	activeFlow } = useContext(FlowContext);

	return (
		<>
			<div>{title || 'Active Flow:'}</div>
			<pre>
				{JSON.stringify(activeFlow || flow, null, 2)}
			</pre>
		</>
	)
}
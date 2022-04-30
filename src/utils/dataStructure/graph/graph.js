export class Graph {
	constructor() {
		this.node = {};
		this.edge = {};
	}

	addNode = (id, value) => {
		this.node[id] = value;
	};

	addEdge = (startNode, endNode) => {
		if (this.edge[startNode] && this.edge[startNode].indexOf(endNode) === -1) {
			this.edge[startNode].push(endNode);
		} else {
			this.edge[startNode] = [endNode];
		}
	};

	removeNode = (nodeId) => {
		this.node[nodeId] = undefined;

		Reflect.deleteProperty(this.edge, nodeId);

		for (const edgeId in this.edge) {
			let i = 0;
			for (const endNode of this.edge[edgeId]) {
				if (endNode === nodeId) {
					this.edge[edgeId].splice(i, 1);
					break;
				}
				i++;
			}
		}
	};
}

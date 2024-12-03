export interface Activity {
	id: number;
	title: string;
	date: string;
	image: string;
	category: string;
	categoryColor: string;
	content?: string;
	gallery?: string[];
	objectives?: string[];
	outcomes?: string[];
}

import { getUserId } from "./storage";

export function getLastComment(card) {
	return card.comment.reduce(
		(accumulator, current, index) => ((current.time > accumulator.time) && index ? current : accumulator)
	);
}

export function LoggedInUserLastCommented(card) {
	const comment = getLastComment(card);
	return comment.user.id === getUserId();
}

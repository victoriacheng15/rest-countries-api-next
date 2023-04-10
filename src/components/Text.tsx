import React from "react";

function Text({
	contentTitle,
	content,
}: { contentTitle: string; content: string }) {
	return (
		<p className="text-lg">
			<span className="font-semibold underline capitalize">
				{contentTitle}:
			</span>{" "}
			{content}
		</p>
	);
}

export default Text;

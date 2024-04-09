import classes from "./styles/ErrorPage.module.css";
import { useParams} from "react-router-dom";

const errorData: Record<string, string> = {
	"404": "Page not found",
	"403": "Forbidden",
	"500": "Internal server error",
	"502": "Bad gateway"
}

export function ErrorPage() {

	const {error} = useParams()
	if (error == undefined) {
		return (
			<div className={classes.container}>
				<div className={classes.header}>
					<div className={classes.code}>{error}</div>
				</div>
				<div>
					<div className={classes.description}>Undefined error</div>
				</div>
			</div>
		)
	}
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<div className={classes.code}>{error}</div>
			</div>
			<div>
				<div className={classes.description}>{errorData[error] ?? "Undefined error"}</div>
			</div>
		</div>
	)
}
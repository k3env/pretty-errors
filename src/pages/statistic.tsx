import {useState} from "react";

export function Statistic() {
	const cls = new Array(801).fill("").map((_a, i) => i)
	const dff = (tz: string) => Intl.DateTimeFormat("ru", {hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: tz}).format
	const nf = new Intl.NumberFormat(undefined, {signDisplay: "always"}).format

	const [ctime, setTime] = useState<Record<string, string>>({})
	const updateTime = () => {
		const ct = new Date()
		const newDts: Record<string, string> = {}
		for (let i = -12; i <=12; i++) {
			newDts[`${i}`] = dff("etc/gmt" + nf(-i))(ct)
		}
		setTime(newDts)
	}
	setInterval(updateTime)

	return (
		<div>
			{cls.map(e => <div key={e}>
				{ctime[`${e % 13}`]}
			</div>)}
		</div>
	)
}
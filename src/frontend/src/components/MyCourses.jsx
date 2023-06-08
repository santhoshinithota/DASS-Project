import { useEffect, useState } from "react"
import api from "../api/api"
import CardList from "./CardList"
import CourseCard from "./CourseCard"

function MyCourses() {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		api.get_current_user_courses().then((res) => {
			setCourses(res.data)
		}).catch((err) => {
			alert(err)
		})
	}, [])

	// add a button to create a new course
	const cards = courses.concat([{
		id: "",
		name: "Add a course",
		image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png",
	}])

	return <CardList cards={cards} Renderer={CourseCard} />
}

export default MyCourses
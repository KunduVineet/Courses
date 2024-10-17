import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  let allCourses = [];

  const [likedCourses, setLikedCourses] = useState([]);

  // Returns a list of all courses received from the API response.
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }   else{
        //only specific category ka data pass kerungaa
        return courses[category];
    }
  };

  return (
    <div>
      {!courses ? (
        <div>
          <p>No Courses Available</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {getCourses().map((course) => {
            return (
              <Card
                key={course.id}
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cards;

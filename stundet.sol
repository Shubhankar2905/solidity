// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRecord {

    struct Student {
        uint id;
        string name;
        uint age;
        string course;
    }


    mapping(uint => Student) public students;

    uint public studentCount;

    function addStudent(
        string memory _name,
        uint _age,
        string memory _course
    ) public {

        studentCount++;

        students[studentCount] = Student(
            studentCount,
            _name,
            _age,
            _course
        );
    }

    function getStudent(uint _id)
        public
        view
        returns (
            uint,
            string memory,
            uint,
            string memory
        )
    {
        require(_id > 0 && _id <= studentCount,
                "Student does not exist");

        Student memory s = students[_id];

        return (
            s.id,
            s.name,
            s.age,
            s.course
        );
    }

    function updateStudent(
        uint _id,
        string memory _name,
        uint _age,
        string memory _course
    ) public {

        require(_id > 0 && _id <= studentCount,
                "Student does not exist");

        students[_id].name = _name;
        students[_id].age = _age;
        students[_id].course = _course;
    }


    function deleteStudent(uint _id) public {

        require(_id > 0 && _id <= studentCount,
                "Student does not exist");

        delete students[_id];
    }

}
https://github.com/nothingnope/lp-2/
const { Course } = require('../models');

const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        return res.status(201).json({
            course,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllCourses = async (req, res) => {
    try {
        const course = await Course.findAll();
        return res.status(200).json({ course, status: "success" });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findOne({
            where: { id: id }});
        if (course) {
            return res.status(200).json({ course });
        }
        return res.status(404).send('Course with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Course.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedCourse = await Course.findOne({ where: { id: id } });
            return res.status(200).json({ course: updatedCourse });
        }
        throw new Error('Course not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Course.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Course deleted");
        }
        throw new Error("Course not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
}
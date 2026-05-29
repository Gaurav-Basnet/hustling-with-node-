const User = require("../model/user");
const express = require("express");
async function getAllUsers(req, res) {
  const users = await User.find({});

  const htm = `
    <ul>
      ${users
        .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
        .join("")}
    </ul>
  `;

  return res.send(htm);
}

async function postUsers(req, res) {
   ;
  try {
    const { firstName, email, lastName, gender, jobTitle } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({
        error: "firstName and email are required",
      });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      gender,
      jobTitle,
    });

    return res.status(201).json({
      message: "User created",
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
}
async function getAllUsersById(req, res) {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  return res.json(user);
}

module.exports = {
  getAllUsers,
  postUsers,
  getAllUsersById,
};
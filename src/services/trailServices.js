const { StatusCodes } = require('http-status-codes');

const trailModel = require('../models/trailModel');
const userModel = require('../models/userModel');

const createNewTrail = async (trail) => {
  const newTrail = { ...trail, likes: [] };
  const data = await trailModel.createNewTrail(newTrail);
  await userModel.updateUserByName(data);
  return data;
};

const findTrails = async () => {
  const trailsList = await trailModel.findTrailsList();
  return trailsList;
};

const deleteTrail = async (id) => {
  const deletedTrail = await trailModel.deleteTrail(id);
  return deletedTrail;
};

const findTrailById = async (id) => {
  const trail = await trailModel.findById(id);

  if (!trail) {
    return {
      error: {
        status: StatusCodes.NOT_FOUND,
        message: 'Trilha não localizada',
      },
    };
  }
  return trail;
};

const editTrail = async ({ id, ...newTrail }) => {
  const edit = await trailModel.editTrail({ id, newTrail });

  if (edit.acknowledged) {
    return trailModel.findById(id);
  }
};

const findTrailsByTechnology = async (technology) => {
  const trails = await trailModel.findByTechnology(technology);

  if (!trails) {
    return {
      error: {
        status: StatusCodes.NOT_FOUND,
        message: 'Não há trilhas com essa tecnologia',
      },
    };
  }
  return trails;
};

const removeLikeFromUser = async (userId, trailId) => {
  const { trails: { likedTrails } } = await userModel.getUserByid(userId);
  const newLikedTrails = likedTrails.filter((item) => item !== trailId);
  await userModel.updateUserLikes(userId, newLikedTrails);
};

const removeLikeFromTrail = async (trailId, userId, oldLikeArray) => {
  const newLikeArray = oldLikeArray.filter((item) => item !== userId);
  await trailModel.updateTrailLikes(trailId, newLikeArray);
  await removeLikeFromUser(userId, trailId);

  const { likes } = await trailModel.findById(trailId);
  const likesCount = likes.length;
  return {
    status: StatusCodes.OK,
    likesCount,
  };
};

const errorMount = () => ({
  error: {
    status: StatusCodes.CONFLICT,
    message: 'Não foi possível curtir esta trilha.',
  },
});

const updateLikes = async (trailId, userId) => {
  const { likes: oldLikes } = await trailModel.findById(trailId);
  const isRepeatedLike = oldLikes.includes(userId.toString());
  
  if (isRepeatedLike) return removeLikeFromTrail(trailId, userId, oldLikes);
  
  const trail = await trailModel.updateTrailLikes(trailId, [...oldLikes, userId]);
  const { trails: { likedTrails } } = await userModel.getUserByid(userId);
  const user = await userModel.updateUserLikes(userId, [...likedTrails, trailId]);
  
  if (!trail && !user) return errorMount();
  
  const { likes } = await trailModel.findById(trailId);
  const likesCount = likes.length;
  
  return {
    status: StatusCodes.OK,
    likesCount,
  };
}; 

module.exports = {
  createNewTrail,
  findTrails,
  deleteTrail,
  findTrailById,
  editTrail,
  findTrailsByTechnology,
  updateLikes,
};

import { Request, Response } from "express";
import Menu from "../model/menu.modal";

//@desc get menu items
//@route GET /api/get/menu
//@access Public
export const getMenu = async (req: Request, res: Response) => {
  try {
    const menu = await Menu.find();
    res.status(200).json(menu);
  } catch (error) {
    res.status(404).json({ error });
  }
};

//@desc create menu items 
//@route POST /api/create/menu
//@access Public
export const createMenu = async (req: Request, res: Response) => {
  try {
    const { menuName, menuDescription, itemName, description, price } =
      req.body;
    const updatedMenu = await Menu.findOneAndUpdate(
      { menuName},
      {
        $set: {
          description: menuDescription,
      },
        $push: {
          items: {
            itemName,
            itemDescription:description,
            price,
          },
        },
      },
      { new: true, upsert: true }// if the document does not exist, insert it
    );
    res.status(201).json(updatedMenu);
  } catch (error) {
    res.status(400).json({ error });
  }
};

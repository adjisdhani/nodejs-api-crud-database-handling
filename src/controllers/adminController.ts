import { Request, Response } from "express";
import { Admin } from "../models/Admin";
import { AppDataSource } from "../config/database-orm";
import bcrypt from "bcrypt";

const adminRepository = AppDataSource.getRepository(Admin);

export const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await adminRepository.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAdminById = async (req: Request, res: Response) => {
  try {
    const admin = await adminRepository.findOneBy({ id: Number(req.params.id) });
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = adminRepository.create({ username, password: hashedPassword, role });
    await adminRepository.save(newAdmin);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;
    const admin = await adminRepository.findOneBy({ id: Number(req.params.id) });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    admin.username = username || admin.username;
    if (password) admin.password = await bcrypt.hash(password, 10);
    admin.role = role || admin.role;

    await adminRepository.save(admin);
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await adminRepository.findOneBy({ id: Number(req.params.id) });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    await adminRepository.remove(admin);
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

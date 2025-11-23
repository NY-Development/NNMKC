import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Staff } from '@prisma/client';

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

@Injectable()
export class StaffService {
  constructor(private readonly prisma: PrismaService) {}

  create(createStaffDto: CreateStaffDto): Promise<Staff> {
    return this.prisma.staff.create({
      data: createStaffDto,
    });
  }

  findAll(): Promise<Staff[]> {
    return this.prisma.staff.findMany({
      orderBy: {
        order: 'asc', // Show leaders by their defined order (1, 2, 3...)
      },
    });
  }

  async findOne(id: string): Promise<Staff> {
    const staffMember = await this.prisma.staff.findUnique({
      where: { id },
    });
    if (!staffMember) {
      throw new NotFoundException(`Staff member with ID ${id} not found`);
    }
    return staffMember;
  }

  async update(id: string, updateStaffDto: UpdateStaffDto): Promise<Staff> {
    await this.findOne(id); // Ensure exists
    return this.prisma.staff.update({
      where: { id },
      data: updateStaffDto,
    });
  }

  async remove(id: string): Promise<Staff> {
    await this.findOne(id); // Ensure exists
    return this.prisma.staff.delete({
      where: { id },
    });
  }
}

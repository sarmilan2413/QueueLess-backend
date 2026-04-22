import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  BOOKING_STATUSES,
  BookingStatus,
} from '../schemas/booking.schema';

export class UpdateBookingDto {
  @IsOptional()
  @IsString()
  customerName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  serviceType?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  appointmentDate?: Date;

  @IsOptional()
  @IsString()
  appointmentTime?: string;

  @IsOptional()
  @IsEnum(BOOKING_STATUSES)
  status?: BookingStatus;
}

import { Body, Controller, Request, UseGuards, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('bookings')
export class BookingsController {

    constructor(private bookingService: BookingsService) { }
    @UseGuards(AuthGuard('jwt'))
    @Get('user/:userId')
    findAllByUserId(
        @Param("userId", ParseIntPipe)
        userId: number): Promise<Booking[]> {
        return this.bookingService.findAllByUserId(userId);
    }
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(
        @Request() request,
        @Body() booking: Booking): Promise<Booking> {
        console.log(request.user);
        booking.user = request.user;
        return await this.bookingService.create(booking);
    }

}

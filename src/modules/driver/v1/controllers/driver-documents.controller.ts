import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query, Session } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiResponses } from 'general/decorators/api-responses.decorator';
import { LogConfig } from 'general/decorators/log-config.decorator';
import { CommonMessageResponseDto } from 'general/dto/common.response.dto';
import { Auth } from '../../../../decorators/auth.decorator';
import { AppRole } from '../../../../enums/app-roles.enum';
import { ProfileData } from '../../../../interfaces/profile-data.interface';
import {
  AddDriverDocumentsBodyDtoV1,
  DriverDocumentsResponseDtoV1,
  GetDriverDocumentsQueryDtoV1,
  UpdateDriverDocumentsBodyDtoV1,
} from '../dto/driver-documents.dto';

@Controller({
  path: 'drivers/:driver_id/documents',
  version: '1',
})
@ApiTags('Driver documents')
@Auth([AppRole.DRIVER])
@LogConfig({ onlyErrors: true })
export class DriverDocumentsControllerV1 {
  constructor() {}

  @Post()
  @ApiOperation({ summary: 'Add driver document' })
  @ApiResponses({
    200: DriverDocumentsResponseDtoV1,
    400: CommonMessageResponseDto,
    500: CommonMessageResponseDto,
  })
  @HttpCode(200)
  async addDriverDocument(
    @Session() profileData: ProfileData,
    @Param('driver_id') driver_id: string,
    @Body() body: AddDriverDocumentsBodyDtoV1,
  ) {}

  @Patch(':document_id')
  @ApiOperation({ summary: 'Update driver document' })
  @ApiResponses({
    200: DriverDocumentsResponseDtoV1,
    400: CommonMessageResponseDto,
    500: CommonMessageResponseDto,
  })
  async updateDriverDocument(
    @Session() profileData: ProfileData,
    @Param('driver_id') driver_id: string,
    @Param('document_id') document_id: string,
    @Body() body: UpdateDriverDocumentsBodyDtoV1,
  ) {}

  @Get(':document_id')
  @ApiOperation({ summary: 'Get driver document' })
  @ApiResponses({
    200: DriverDocumentsResponseDtoV1,
    400: CommonMessageResponseDto,
    500: CommonMessageResponseDto,
  })
  async getDriverDocument(
    @Session() profileData: ProfileData,
    @Param('driver_id') driver_id: string,
    @Param('document_id') document_id: string,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get driver documents' })
  @ApiResponses({
    200: [DriverDocumentsResponseDtoV1],
    400: CommonMessageResponseDto,
    500: CommonMessageResponseDto,
  })
  async getDriverDocuments(
    @Session() profileData: ProfileData,
    @Param('driver_id') driver_id: string,
    @Query() query: GetDriverDocumentsQueryDtoV1,
  ) {}

  @Delete(':document_id')
  @ApiOperation({ summary: 'Delete driver document' })
  @ApiResponses({
    200: CommonMessageResponseDto,
    400: CommonMessageResponseDto,
    500: CommonMessageResponseDto,
  })
  async deleteDriverDocument(
    @Session() profileData: ProfileData,
    @Param('driver_id') driver_id: string,
    @Param('document_id') document_id: string,
  ) {}
}

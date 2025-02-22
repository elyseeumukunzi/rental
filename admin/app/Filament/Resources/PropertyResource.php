<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PropertyResource\Pages;
use App\Filament\Resources\PropertyResource\RelationManagers;
use App\Models\Property;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Wizard;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PropertyResource extends Resource
{
    protected static ?string $model = Property::class;

    protected static ?string $navigationIcon = 'heroicon-s-home-modern';
    public static function form(Form $form): Form
    {
        return $form
            ->columns(1)
            ->schema([
                Wizard::make([
                    Wizard\Step::make('Property Details')
                        ->columns(2)
                        ->icon('heroicon-s-book-open')
                        ->schema([

                            //let user choose the category among available ones
                            Select::make('category_id')
                                ->relationship('category', 'name'),
                            Forms\Components\TextInput::make('title')
                                ->required()
                                ->placeholder('Property title')
                                ->maxLength(255),
                            Forms\Components\Textarea::make('description')
                                ->placeholder('Describe your property in few words')
                                ->required()
                                ->columnSpanFull(),
                            Forms\Components\TextInput::make('price')
                                ->required()
                                ->placeholder('Enter price in RWF')
                                ->label('Price per night')
                                ->maxLength(255),
                            Forms\Components\TextInput::make('location')
                                ->required()
                                ->placeholder('Where is the property located')
                                ->maxLength(255),

                            Select::make('status')
                                ->options([
                                    'Available' => 'Available',
                                    'Booked' => 'Booked',
                                ])
                        ]),
                    Wizard\Step::make('Features')
                        ->columns(2)
                        ->icon('heroicon-s-adjustments-horizontal')
                        ->schema([
                            Section::make('Images')
                                ->columns(3)
                                ->description('Upload 3 images that shows well your property')
                                ->schema([
                                    FileUpload::make('image1')
                                        ->image()
                                        ->directory('uploads/images/properties')
                                        ->preserveFilenames()
                                        ->required(),
                                    FileUpload::make('image2')
                                        ->required()
                                        ->directory('uploads/images/properties')
                                        ->preserveFilenames()
                                        ->image(),
                                    FileUpload::make('image3')
                                        ->required()
                                        ->directory('uploads/images/properties')
                                        ->preserveFilenames()
                                        ->image(),

                                ]),

                            Section::make('Features')

                                ->description('Add features to your property')
                                ->schema([
                                    Repeater::make('features')
                                        ->schema([
                                            TextInput::make('name')->required(),
                                            Select::make('description')
                                                ->options([
                                                    'available' => 'Available',
                                                    'not available' => 'Not Available',
                                                ])                                                
                                                ->required(),                                                
                                        ])
                                        ->columns(2)
                                        
                                ]),

                        ]),
                ]),



            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('price')
                    ->searchable(),
                Tables\Columns\TextColumn::make('location')
                    ->searchable(),
                ImageColumn::make('image1')
                    ->searchable(),
                ImageColumn::make('image2')
                    ->searchable(),
                ImageColumn::make('image3')
                    ->searchable(),
                Tables\Columns\TextColumn::make('status')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProperties::route('/'),
            'create' => Pages\CreateProperty::route('/create'),
            'edit' => Pages\EditProperty::route('/{record}/edit'),
        ];
    }
}

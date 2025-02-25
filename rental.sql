-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2025 at 09:01 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `property_id`, `user_id`, `start_date`, `end_date`, `comment`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, '2025-02-17', '2025-02-18', 'Comments hereeee', '1', '2025-02-17 09:45:07', '2025-02-22 09:55:28'),
(2, 3, NULL, '111', '12111', NULL, '1', '2025-02-22 16:43:41', '2025-02-22 16:43:41'),
(3, 2, 1, 'kgkgk', 'kjgkjgk', 'Booking comments', '2', '2025-02-22 16:47:53', '2025-02-22 16:47:53'),
(4, 2, 1, '758758', 'kjgkjgkjg', NULL, '1', '2025-02-22 16:49:28', '2025-02-22 16:49:28'),
(5, 9, 1, '12/12/2024', '14/12/2024', NULL, '1', '2025-02-22 18:57:34', '2025-02-22 18:58:09');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Appartment', 'House, rooms, place ready to host one or more people to stay', '2025-02-16 07:42:45', '2025-02-16 07:42:45'),
(2, 'Office', 'Equipped place for hosting people doing professional things or other secretarial jobs that need comfort', '2025-02-16 07:44:23', '2025-02-16 07:44:23'),
(3, 'Student Appartments', 'Apartments reserved for students and support students environment', '2025-02-22 18:45:36', '2025-02-22 18:45:36');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`id`, `property_id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 3, '3 Bathrooms', 'available', '2025-02-16 09:23:49', '2025-02-16 09:23:49'),
(2, 3, 'Fire hydrants', 'available', '2025-02-16 09:23:49', '2025-02-16 09:23:49'),
(3, 4, 'Balcony', 'available', '2025-02-22 18:09:56', '2025-02-22 18:09:56'),
(4, 4, 'Swimming Pool', 'available', '2025-02-22 18:09:56', '2025-02-22 18:09:56'),
(5, 4, 'Gym', 'available', '2025-02-22 18:09:56', '2025-02-22 18:09:56'),
(6, 4, 'Parking', 'available', '2025-02-22 18:09:56', '2025-02-22 18:09:56'),
(7, 1, 'Fire hydrants', 'available', '2025-02-16 09:23:49', '2025-02-16 09:23:49'),
(8, 1, 'Balcony', 'available', '2025-02-22 18:09:56', '2025-02-22 18:09:56'),
(9, 1, 'Swimming Pool', 'available', '2025-02-22 18:09:56', '2025-02-22 18:09:56'),
(10, 1, 'Gym', 'available', '2025-02-22 18:09:56', '2025-02-22 18:09:56'),
(11, 1, 'Parking', 'available', '2025-02-22 18:09:56', '2025-02-22 18:09:56'),
(12, 5, 'Fireplace', 'available', '2025-02-22 18:17:35', '2025-02-22 18:17:35'),
(13, 5, 'Hiking Trails', 'available', '2025-02-22 18:17:35', '2025-02-22 18:17:35'),
(14, 5, 'Hot Tub', 'available', '2025-02-22 18:17:35', '2025-02-22 18:17:35'),
(15, 5, 'Wood Interior', 'available', '2025-02-22 18:17:35', '2025-02-22 18:17:35'),
(16, 6, 'Smart Locks', 'available', '2025-02-22 18:20:16', '2025-02-22 18:20:16'),
(17, 6, 'Elevator', 'available', '2025-02-22 18:20:16', '2025-02-22 18:20:16'),
(18, 6, 'High-Speed WiFi', 'available', '2025-02-22 18:20:16', '2025-02-22 18:20:16'),
(19, 6, 'Rooftop', 'available', '2025-02-22 18:20:16', '2025-02-22 18:20:16'),
(20, 6, 'Nearby Transport', 'available', '2025-02-22 18:20:16', '2025-02-22 18:20:16'),
(21, 7, 'Private Beach', 'available', '2025-02-22 18:23:05', '2025-02-22 18:23:05'),
(22, 7, 'nfinity Poo', 'available', '2025-02-22 18:23:05', '2025-02-22 18:23:05'),
(23, 7, 'BBQ Area', 'available', '2025-02-22 18:23:05', '2025-02-22 18:23:05'),
(24, 7, 'Garden', 'available', '2025-02-22 18:23:05', '2025-02-22 18:23:05'),
(25, 8, ' Smart Appliances', 'available', '2025-02-22 18:25:25', '2025-02-22 18:25:25'),
(26, 8, 'Exposed Brick', 'available', '2025-02-22 18:25:25', '2025-02-22 18:25:25'),
(27, 8, 'Open Floor Plan', 'available', '2025-02-22 18:25:25', '2025-02-22 18:25:25'),
(28, 8, 'Large Windows', 'available', '2025-02-22 18:25:25', '2025-02-22 18:25:25'),
(29, 8, ' Pet-Friendly', 'available', '2025-02-22 18:25:25', '2025-02-22 18:25:25'),
(30, 9, 'Smart Locks', 'available', '2025-02-22 18:28:02', '2025-02-22 18:28:02'),
(31, 9, 'Study Area, ', 'available', '2025-02-22 18:28:02', '2025-02-22 18:28:02'),
(32, 9, 'Shared Kitchen', 'available', '2025-02-22 18:28:02', '2025-02-22 18:28:02'),
(33, 9, ' 24/7 Wifi and Security', 'available', '2025-02-22 18:28:02', '2025-02-22 18:28:02'),
(34, 10, 'Free WIFI Included', 'available', '2025-02-22 18:48:43', '2025-02-22 18:48:43'),
(35, 10, 'Shared Kitchen ', 'available', '2025-02-22 18:48:43', '2025-02-22 18:48:43'),
(36, 10, 'Security 24/7', 'available', '2025-02-22 18:48:43', '2025-02-22 18:48:43');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2025_02_16_091659_create_properties_table', 2),
(6, '2025_02_16_092947_create_categories_table', 2),
(7, '2025_02_16_093210_create_features_table', 2),
(8, '2025_02_17_111937_create_bookings_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', 'd13cdf1fdfea7bdd1c8f38b773e9652b96cf0ee7e4ceb220714854a7961e92cf', '[\"*\"]', NULL, NULL, '2025-02-17 14:37:18', '2025-02-17 14:37:18'),
(2, 'App\\Models\\User', 2, 'auth_token', 'c9012fea0836925654ab6dc04e29aeb946045e24da4cbe8fb4e52b62940f4349', '[\"*\"]', NULL, NULL, '2025-02-17 14:37:35', '2025-02-17 14:37:35'),
(3, 'App\\Models\\User', 1, 'auth_token', '58a9ca60eb66153f9db4f541a7e0a1d628bb6adf8fcfdb4fd79c963dde6314f4', '[\"*\"]', NULL, NULL, '2025-02-17 14:39:43', '2025-02-17 14:39:43'),
(4, 'App\\Models\\User', 1, 'auth_token', '452c616464d50b1c22c32b9b10e0ff42f93d6d140324c9e8411240bcd406149a', '[\"*\"]', NULL, NULL, '2025-02-17 14:50:17', '2025-02-17 14:50:17'),
(5, 'App\\Models\\User', 1, 'auth_token', 'ee0fcba50be46b0f3db04ef3b892d5be52d8d6d87b3bba5102c18f416bc4cc7d', '[\"*\"]', NULL, NULL, '2025-02-17 14:56:17', '2025-02-17 14:56:17'),
(6, 'App\\Models\\User', 1, 'auth_token', '0719a438ee0790903787500b7d03d4ae2306b4906e5222e27e5776c6038a0dab', '[\"*\"]', NULL, NULL, '2025-02-17 14:56:52', '2025-02-17 14:56:52'),
(7, 'App\\Models\\User', 1, 'auth_token', '9348dd8d4694267021d240e1a8f9be7d5f524bc9ad04c45020cf338084b0210b', '[\"*\"]', NULL, NULL, '2025-02-17 15:00:26', '2025-02-17 15:00:26'),
(8, 'App\\Models\\User', 1, 'auth_token', '76d4271f83be994e739782e86bc9513fb0dcaf307e6d8105896b85cfa86ed720', '[\"*\"]', NULL, NULL, '2025-02-20 19:53:32', '2025-02-20 19:53:32'),
(9, 'App\\Models\\User', 1, 'auth_token', 'a3bd199672976fe3c41393dd9e5b14d61c2c3eca7f8633de062d1555870fd5fd', '[\"*\"]', NULL, NULL, '2025-02-20 19:53:58', '2025-02-20 19:53:58'),
(10, 'App\\Models\\User', 1, 'auth_token', '2a8577556e1ce799a61c6a8a631e61eacb5fba5f8f93c55860fcd24986bd801d', '[\"*\"]', NULL, NULL, '2025-02-22 12:14:55', '2025-02-22 12:14:55'),
(11, 'App\\Models\\User', 1, 'auth_token', 'ca3c7cd4d36e7eb015cdd6fdd520259ee6e765703bd673a5c9b63e3eb1af68bf', '[\"*\"]', NULL, NULL, '2025-02-22 12:22:00', '2025-02-22 12:22:00'),
(12, 'App\\Models\\User', 1, 'auth_token', 'e941fb09f7fd3e0f9b457508f2b6b65622e0c68f1f07e98eeedab3ac1573ec72', '[\"*\"]', NULL, NULL, '2025-02-22 13:24:33', '2025-02-22 13:24:33'),
(13, 'App\\Models\\User', 1, 'auth_token', '03740098db0a7d454457358b228771c13179e0cbee19ded130e667621d26dc16', '[\"*\"]', NULL, NULL, '2025-02-22 13:24:40', '2025-02-22 13:24:40'),
(14, 'App\\Models\\User', 1, 'auth_token', '930c907ecf10da9e532f502aa38d35a5ae78fa42474b6ce582b5832658836f54', '[\"*\"]', NULL, NULL, '2025-02-22 14:56:36', '2025-02-22 14:56:36'),
(15, 'App\\Models\\User', 1, 'auth_token', 'e24995ddd4b0a46948fa5ba5ff2ee74b5e21d59ff3468c01f93212103eab641d', '[\"*\"]', NULL, NULL, '2025-02-22 15:56:30', '2025-02-22 15:56:30'),
(16, 'App\\Models\\User', 1, 'auth_token', '99c900ce552c52067ab1d63fa14869f09f4aa68774e110825778bff7952ed4f7', '[\"*\"]', NULL, NULL, '2025-02-22 16:03:40', '2025-02-22 16:03:40'),
(17, 'App\\Models\\User', 1, 'auth_token', '67830d4a8c9e77d982e8d0835fdf44a3381082439014b202657a86487b52d705', '[\"*\"]', NULL, NULL, '2025-02-22 16:04:02', '2025-02-22 16:04:02'),
(18, 'App\\Models\\User', 1, 'auth_token', '21f3c8d6c80939dedc2f821609c66b284eb30ca17628d02817d50e8e6668ebfb', '[\"*\"]', NULL, NULL, '2025-02-22 16:47:32', '2025-02-22 16:47:32'),
(19, 'App\\Models\\User', 1, 'auth_token', '4c66a89ea503590a62c88fc6c8387556a34ff394a4a73f696487f68367eddf17', '[\"*\"]', NULL, NULL, '2025-02-22 17:48:50', '2025-02-22 17:48:50'),
(20, 'App\\Models\\User', 1, 'auth_token', '622dcd11dc7e738804c09c0afffb45ca27c8e4fb3e19570877d8057573f0c8e9', '[\"*\"]', NULL, NULL, '2025-02-22 18:54:32', '2025-02-22 18:54:32'),
(21, 'App\\Models\\User', 1, 'auth_token', 'e3be24781f82a9d12166a8597cdc46f5f9bf2fc788c49d305259f8418aa62ccb', '[\"*\"]', NULL, NULL, '2025-02-22 18:56:39', '2025-02-22 18:56:39');

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `category_id`, `title`, `description`, `price`, `location`, `image1`, `image2`, `image3`, `status`, `created_at`, `updated_at`) VALUES
(1, '1', 'Kicukiro Kagugu Apartment', 'You can rent appartment for a cheaper price and enjoy your view of kigali City, cool air and Sunset ', '15000', 'Kigali - Kagugu', 'uploads/images/properties/2.jpg', 'uploads/images/properties/Butaro Hospital MASS 2306.webp', 'uploads/images/properties/house1 4.jpeg', 'Available', '2025-02-16 08:35:59', '2025-02-16 08:35:59'),
(2, '1', 'Down Town appartment', 'This appartmeed in the middle of the down near all supermarkets, if you are enjoying the city for a short time.', '15000', 'Kigali - Kabeza', 'uploads/images/properties/gasogi 1.jpeg', 'uploads/images/properties/cow.webp', 'uploads/images/properties/cow.webp', 'Booked', '2025-02-16 09:17:36', '2025-02-16 09:17:36'),
(3, '1', 'Lake shore Villa', 'Enjoy the laks shore appartment near Lake Kivu, Fresh air, Cool view and beach near by.', '15000', 'Kigali - Kabeza', 'uploads/images/properties/gasogi 1.jpeg', 'uploads/images/properties/cow.webp', 'uploads/images/properties/cow.webp', 'Booked', '2025-02-16 09:23:49', '2025-02-16 09:23:49'),
(4, '1', 'Lake View Apartment', 'A luxurious apartment with a sea view.', '100', 'Rubavu Gisenyi', 'uploads/images/properties/appartment2.webp', 'uploads/images/properties/appartment3.webp', 'uploads/images/properties/appartment5.webp', 'Available', '2025-02-22 18:09:55', '2025-02-22 18:09:55'),
(5, '1', 'Cozy Mountain Cabin', 'Perfect getaway in the mountains.', '150', 'Karongi Kibuye', 'uploads/images/properties/appartment1.webp', 'uploads/images/properties/appartment111.webp', 'uploads/images/properties/appartment11.webp', 'Available', '2025-02-22 18:17:34', '2025-02-22 18:17:34'),
(6, '1', 'Downtown Studio', 'Modern studio in the heart of the city.', '200', 'Kigali Downtown', 'uploads/images/properties/appartment2.webp', 'uploads/images/properties/appartment22.webp', 'uploads/images/properties/appartment222.webp', 'Available', '2025-02-22 18:20:16', '2025-02-22 18:20:16'),
(7, '1', 'Beachfront Villa', 'Spacious villa right on the beach.', '300', 'Kayonza DownTown', 'uploads/images/properties/appartment444.jpeg', 'uploads/images/properties/appartment555.webp', 'uploads/images/properties/appartment333.webp', 'Available', '2025-02-22 18:23:05', '2025-02-22 18:23:05'),
(8, '1', '	Modern Loft', 'Stylish loft in an artistic district.', '90', 'Kigali Gisozi', 'uploads/images/properties/appartment3.webp', 'uploads/images/properties/appartment2.webp', 'uploads/images/properties/WhatsApp Image 2024-10-30 at 18.39.56.jpeg', 'Available', '2025-02-22 18:25:25', '2025-02-22 18:25:25'),
(9, '1', '	Student Apartment', 'Affordable housing for students near the campus.', '50', 'Huye Mukoni', 'uploads/images/properties/house1 2.jpeg', 'uploads/images/properties/gasogi 1.jpeg', 'uploads/images/properties/WhatsApp Image 2024-11-10 at 19.59.07.jpeg', 'Available', '2025-02-22 18:28:02', '2025-02-22 18:28:02'),
(10, '3', 'Students appartment for rent', 'This is a house to support students in university, youn can book this from our LALA rentals platform', '800', 'Huye Tumba', 'uploads/images/properties/student3.webp', 'uploads/images/properties/student2.webp', 'uploads/images/properties/student1.webp', 'Available', '2025-02-22 18:48:42', '2025-02-22 18:48:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'elysee', 'elyseeumukunzi@gmail.com', NULL, '$2y$12$O77VWnX6QqSGrcHcmpCD6.Lsz/Aq6Jj42xTEptV2SSayZfSH.efHu', NULL, '2025-02-16 06:57:16', '2025-02-16 06:57:16'),
(2, 'Stand Together For Change', 'standtogether98@gmail.com', NULL, '$2y$12$8uQ52ONL0P3Az8wDk0ZQzuRIwk0i0PQa7XCW1rtX5ZJfheVSuS.rm', NULL, '2025-02-17 14:37:35', '2025-02-17 14:37:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookings_property_id_foreign` (`property_id`),
  ADD KEY `bookings_user_id_foreign` (`user_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_property_id_foreign` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `bookings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

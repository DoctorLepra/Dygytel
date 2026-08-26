-- --------------------------------------------------------
-- Dygytel CMS - Production Database Export for MySQL
-- Host: cPanel / MySQL 5.7+ / MariaDB
-- Generation Date: 2026-08-26 05:26:53
-- --------------------------------------------------------

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
SET NAMES utf8mb4;

-- Structure for table `users`
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'editor',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table `users`
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role`) VALUES
('2', 'Sebastian', 'sebastianvalencia363@gmail.com', '2026-08-18 04:24:06', '$2y$12$yO9cdmO/PPqZ5EzEb/CR4OMUvstP9RFmC5BVYfnl8ULRnEWZBlAC6', 'dcD9tWq6LjDiEGeqmFC5fOOKzxcKSOE1Kv75SbTUpFMXkkeHUy2QpT4XbU4M', '2026-08-18 02:39:46', '2026-08-18 04:34:15', 'admin'),
('3', 'Prueba', 'o08nyrzvw9@ozsaip.com', '2026-08-18 04:40:27', '$2y$12$h3HR1LoVhvJsvytG0GaPPudyl991uS4g6VLRJOcbhA4hBiTtTqAhK', NULL, '2026-08-18 04:39:49', '2026-08-18 04:40:27', 'editor');

-- Structure for table `password_reset_tokens`
DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure for table `sessions`
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table `sessions`
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('IJACyDueifECNMhd1GUXh85JUz7kegGe3RMSDrAu', '2', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36 Edg/151.0.0.0', 'eyJfdG9rZW4iOiJJbTFlYVVZdVBDYnVHM0JWN3NPaDB1a0lLYkVpbHJreHFwMGpraDR2IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwXC9hZG1pblwvbWFuYWdlLWhvbWUtcGFnZSIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucGFnZXMubWFuYWdlLWhvbWUtcGFnZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX0sInVybCI6W10sImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjoyLCJwYXNzd29yZF9oYXNoX3dlYiI6ImZlMDI5YTk0YmY4N2E2YjQ1NzJmOTkxNDBlYzBkZmY4NDFjNjk5YmRmMjYzNDU2NmEyNzExMmFmMzk2ZjYyZjEiLCJ0YWJsZXMiOnsiOGZhYzZlYjFjZWMyNjgwM2IzZjdmYjQ0MGEyNzExMWJfY29sdW1ucyI6W3sidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJza3UiLCJsYWJlbCI6IlNLVSIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJuYW1lIiwibGFiZWwiOiJOb21icmUiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoicHJpY2UiLCJsYWJlbCI6IlByZWNpbyIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJjYXRlZ29yeSIsImxhYmVsIjoiQ2F0ZWdvcmlhIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImJyYW5kIiwibGFiZWwiOiJNYXJjYSIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9XSwiMGYwYTcwNDI4MDczZmYyNDk5ZWFiMzVhZWE4NDlkODhfY29sdW1ucyI6W3sidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJuYW1lIiwibGFiZWwiOiJOb21icmUiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoiZW1haWwiLCJsYWJlbCI6IkNvcnJlbyBFbGVjdHJcdTAwZjNuaWNvIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InJvbGUiLCJsYWJlbCI6IlJvbCIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJlbWFpbF92ZXJpZmllZF9hdCIsImxhYmVsIjoiRXN0YWRvIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImNyZWF0ZWRfYXQiLCJsYWJlbCI6IkZlY2hhIFJlZ2lzdHJvIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH1dLCI1ZGM3OWQ1NDY0MTc0YTI5YjdmMGRlNmMyMDhkMWFlY19jb2x1bW5zIjpbeyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InRpdGxlIiwibGFiZWwiOiJUXHUwMGVkdHVsbyBkZWwgRG9jdW1lbnRvIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImZpbGVfcGF0aCIsImxhYmVsIjoiQXJjaGl2byBQREYiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoiaXNfYWN0aXZlIiwibGFiZWwiOiJWaXNpYmxlIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InNvcnRfb3JkZXIiLCJsYWJlbCI6Ik9yZGVuIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InVwZGF0ZWRfYXQiLCJsYWJlbCI6Ilx1MDBkYWx0aW1hIE1vZGlmaWNhY2lcdTAwZjNuIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH1dfSwiZmlsYW1lbnQiOltdfQ==', '1787634112'),
('MUqXD4lNbFeXRGH56ZNEfRckABCYWBJpwVXf5r2s', '2', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36 Edg/151.0.0.0', 'eyJfdG9rZW4iOiIzODZXTlZtR2p4WnM5dVowc3k4eWVZQjBPSUhLZ2E3T1MwS0JyV2p6IiwidXJsIjpbXSwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwXC9hZG1pblwvcHJvZHVjdHMiLCJyb3V0ZSI6ImZpbGFtZW50LmFkbWluLnJlc291cmNlcy5wcm9kdWN0cy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX0sImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjoyLCJwYXNzd29yZF9oYXNoX3dlYiI6ImZlMDI5YTk0YmY4N2E2YjQ1NzJmOTkxNDBlYzBkZmY4NDFjNjk5YmRmMjYzNDU2NmEyNzExMmFmMzk2ZjYyZjEiLCJ0YWJsZXMiOnsiOGZhYzZlYjFjZWMyNjgwM2IzZjdmYjQ0MGEyNzExMWJfY29sdW1ucyI6W3sidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJza3UiLCJsYWJlbCI6IlNLVSIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJuYW1lIiwibGFiZWwiOiJOb21icmUiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoicHJpY2UiLCJsYWJlbCI6IlByZWNpbyIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJjYXRlZ29yeSIsImxhYmVsIjoiQ2F0ZWdvcmlhIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImJyYW5kIiwibGFiZWwiOiJNYXJjYSIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9XSwiMGYwYTcwNDI4MDczZmYyNDk5ZWFiMzVhZWE4NDlkODhfY29sdW1ucyI6W3sidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJuYW1lIiwibGFiZWwiOiJOb21icmUiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoiZW1haWwiLCJsYWJlbCI6IkNvcnJlbyBFbGVjdHJcdTAwZjNuaWNvIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InJvbGUiLCJsYWJlbCI6IlJvbCIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJlbWFpbF92ZXJpZmllZF9hdCIsImxhYmVsIjoiRXN0YWRvIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImNyZWF0ZWRfYXQiLCJsYWJlbCI6IkZlY2hhIFJlZ2lzdHJvIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH1dfX0=', '1787718816');

-- Structure for table `cache`
DROP TABLE IF EXISTS `cache`;
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table `cache`
INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-da4b9237bacccdf19c0760cab7aec4a8359010b0:timer', 'i:1787634147;', '1787634147'),
('laravel-cache-da4b9237bacccdf19c0760cab7aec4a8359010b0', 'i:9;', '1787634147'),
('laravel-cache-5c785c036466adea360111aa28563bfd556b5fba:timer', 'i:1787634576;', '1787634576'),
('laravel-cache-5c785c036466adea360111aa28563bfd556b5fba', 'i:1;', '1787634576');

-- Structure for table `cache_locks`
DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure for table `jobs`
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table `jobs`
INSERT INTO `jobs` (`id`, `queue`, `payload`, `attempts`, `reserved_at`, `available_at`, `created_at`) VALUES
('1', 'default', '{\"uuid\":\"e9f4a1ee-6deb-48a6-9008-e9ce72f5f866\",\"displayName\":\"App\\\\Notifications\\\\UserInvitationNotification\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"deleteWhenMissingModels\":false,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":3:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:15:\\\"App\\\\Models\\\\User\\\";s:2:\\\"id\\\";a:1:{i:0;i:2;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:6:\\\"sqlite\\\";s:15:\\\"collectionClass\\\";N;}s:12:\\\"notification\\\";O:44:\\\"App\\\\Notifications\\\\UserInvitationNotification\\\":1:{s:2:\\\"id\\\";s:36:\\\"0ac7e049-800f-4618-8492-331f570a663b\\\";}s:8:\\\"channels\\\";a:1:{i:0;s:4:\\\"mail\\\";}}\",\"batchId\":null},\"createdAt\":1787020787,\"delay\":null}', '0', NULL, '1787020787', '1787020787');

-- Structure for table `failed_jobs`
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure for table `personal_access_tokens`
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure for table `categories`
DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure for table `brands`
DROP TABLE IF EXISTS `brands`;
CREATE TABLE IF NOT EXISTS `brands` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `brands_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure for table `products`
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `frequency` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `channels` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `power` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `features` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `includes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_sku_unique` (`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure for table `web_contents`
DROP TABLE IF EXISTS `web_contents`;
CREATE TABLE IF NOT EXISTS `web_contents` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `page` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'text',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `web_contents_page_key_unique` (`page`,`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table `web_contents`
INSERT INTO `web_contents` (`id`, `page`, `key`, `type`, `value`, `created_at`, `updated_at`) VALUES
('1', 'about', 'hero_title', 'text', 'La voz detrás de las', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('2', 'about', 'hero_title_highlight', 'text', 'operaciones críticas.', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('3', 'about', 'hero_description', 'textarea', 'En Dygytel unimos tecnología de vanguardia, ingeniería de precisión y compromiso humano para garantizar comunicaciones ininterrumpidas en los entornos más desafiantes de Colombia.', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('4', 'about', 'hero_impact_label', 'text', 'NUESTRO IMPACTO EN CIFRAS', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('5', 'about', 'cifra1_val', 'text', '+50,000', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('6', 'about', 'cifra1_title', 'text', 'Radios activos en campo', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('7', 'about', 'cifra2_val', 'text', '+500', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('8', 'about', 'cifra2_title', 'text', 'Proyectos de telecomunicaciones ejecutados', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('9', 'about', 'cifra3_val', 'text', '99.9%', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('10', 'about', 'cifra3_title', 'text', 'Disponibilidad garantizada en redes contratadas', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('11', 'about', 'story_label', 'text', 'NUESTRA HISTORIA', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('12', 'about', 'story_title', 'text', 'Nacidos para resolver donde la señal celular ', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('13', 'about', 'story_title_highlight', 'text', 'no llega.', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('14', 'about', 'story_desc', 'textarea', 'DYGYTEL es una empresa colombiana con experiencia en el sector de las telecomunicaciones y la tecnología; nos dedicamos a comercializar, alquilar y reparar equipos y sistemas de comunicación.

Nuestra propuesta de valor se fundamenta en la excelencia operativa y un servicio postventa robusto, respaldado por un equipo de profesionales altamente calificados y orientados a brindar soluciones estratégicas adaptadas a las necesidades de cada cliente.

Como distribuidores autorizados, contamos con la representación y el aval directo de las marcas más reconocidas del sector, garantizando la autenticidad y el origen legal de cada uno de los productos que distribuimos.', '2026-08-25 04:48:53', '2026-08-25 04:51:25'),
('15', 'about', 'certifications_label', 'text', 'Certificaciones e Integraciones Oficiales', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('16', 'about', 'certifications', 'json', '[]', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('17', 'about', 'values_label', 'text', 'NUESTROS PILARES', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('18', 'about', 'values_title', 'text', 'Valores que guían nuestra ingeniería', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('19', 'about', 'values_list', 'json', '[{\"title\":\"Legalidad, Integridad y Transparencia\",\"icon\":\"check\",\"desc\":\"Operamos con absoluto rigor normativo y \\u00e9tica\\nprofesional. Garantizamos la trazabilidad y el origen legal de todos nuestros equipos,\\nconstruyendo relaciones basadas en la honestidad y la confianza.\"},{\"title\":\"Calidad y Seguridad\",\"icon\":\"trophy\",\"desc\":\"Comercializamos exclusivamente productos originales respaldados por\\nmarcas l\\u00edderes, asegurando la continuidad operativa, el rendimiento superior y la protecci\\u00f3n de la\\ninfraestructura tecnol\\u00f3gica de nuestros clientes y su equipo de trabajo.\"},{\"title\":\"Excelencia en el Servicio\",\"icon\":\"lightning\",\"desc\":\"Contamos con un equipo humano calificado y con vocaci\\u00f3n de servicio,\\nenfocado en brindar asesor\\u00eda t\\u00e9cnica especializada, atenci\\u00f3n personalizada y un soporte postventa\\n\\u00e1gil y efectivo.\"}]', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('20', 'about', 'cta_label', 'text', '¿TRABAJAMOS JUNTOS?', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('21', 'about', 'cta_title', 'text', 'Diseñemos la red que tu empresa necesita.', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('22', 'about', 'cta_desc', 'textarea', 'Habla con uno de nuestros especialistas técnicos para analizar la cobertura y requerimientos de tu operación.', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('23', 'about', 'cta_btn_text', 'text', 'CONTACTAR INGENIERO', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('24', 'about', 'cta_btn_link', 'text', 'http://localhost:8080/#contacto', '2026-08-25 04:48:53', '2026-08-25 04:48:53'),
('25', 'home', 'hero_title', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('26', 'home', 'hero_title_highlight', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('27', 'home', 'hero_description', 'textarea', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('28', 'home', 'hero_button_text', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('29', 'home', 'hero_button_link', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('30', 'home', 'hero_image', 'image', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('31', 'home', 'hero_badge_1', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('32', 'home', 'hero_badge_2', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('33', 'home', 'hero_badge_3_label', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('34', 'home', 'hero_badge_3_val', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('35', 'home', 'hero_badge_4_label', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('36', 'home', 'hero_badge_4_val', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('37', 'home', 'metric_1_val', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('38', 'home', 'metric_1_label', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('39', 'home', 'metric_2_val', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('40', 'home', 'metric_2_label', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('41', 'home', 'metric_3_val', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('42', 'home', 'metric_3_label', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('43', 'home', 'about_text', 'textarea', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('44', 'home', 'client_logos', 'image', '[\"web-content\\/logos\\/7VzQJ9n7TwASuU0Gc4aaqd3t5C3uKg1SrVr8pY5a.webp\",\"web-content\\/logos\\/DKZIw7nXxVIRDD6z8Ryfnghvxds7nAXW6Yhzayhk.webp\",\"web-content\\/logos\\/ksbhTrJo8PBI6qGn23AS3T75eKV5rANASy9ss3ct.webp\",\"web-content\\/logos\\/GGc46EtHoT3yLNh39UHD9djx8Q8ytPZl8G2Ircfz.webp\",\"web-content\\/logos\\/N28WsL9zE5yXvXtS7YC93VYXbbKL5xsYABud3TyW.webp\",\"web-content\\/logos\\/lGbm6fsQV5yRYQbFI3Kk9rnU8Vtue25FM1QnvMR9.webp\",\"web-content\\/logos\\/3meHiN0E3Wp4AjPyv2eRvUyoU6SqQGa3AumaoeES.webp\",\"web-content\\/logos\\/wkXb7f4oEDqvbz5nIGUXC8LsLidaGbtVWWSLpVdG.webp\",\"web-content\\/logos\\/KzaHJCuQLFYFjwOBNIHL3yIUGAaLDbO63ij8paO9.webp\"]', '2026-08-25 05:01:37', '2026-08-25 05:01:43'),
('45', 'home', 'catalog_title', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('46', 'home', 'catalog_description', 'textarea', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('47', 'home', 'services_title', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('48', 'home', 'services_description', 'textarea', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('49', 'home', 'contact_title', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('50', 'home', 'contact_description', 'textarea', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('51', 'home', 'contact_phone', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('52', 'home', 'contact_email', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37'),
('53', 'home', 'contact_address', 'text', NULL, '2026-08-25 05:01:37', '2026-08-25 05:01:37');

-- Structure for table `attachments`
DROP TABLE IF EXISTS `attachments`;
CREATE TABLE IF NOT EXISTS `attachments` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table `attachments`
INSERT INTO `attachments` (`id`, `title`, `file_path`, `is_active`, `sort_order`, `created_at`, `updated_at`) VALUES
('1', 'Política de prevención ', 'attachments/01M0VJWYHN90DKRHB4E3BBJ1H5.pdf', '1', '0', '2026-08-25 04:29:47', '2026-08-25 04:29:47'),
('2', 'Política de SST', 'attachments/01M0VJYSM0GEEACWE4JVME9D40.pdf', '1', '1', '2026-08-25 04:30:48', '2026-08-25 04:30:48'),
('3', 'Política de acoso laboral ', 'attachments/01M0VK0DHC0R4XPHA05NRA9VKF.pdf', '1', '2', '2026-08-25 04:31:41', '2026-08-25 04:31:41');

COMMIT;

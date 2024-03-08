-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2024 at 09:42 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `paid_amount` varchar(255) NOT NULL,
  `due_date` varchar(255) DEFAULT NULL,
  `payment_status` int(11) NOT NULL DEFAULT 0 COMMENT '1-Paid,2-Unpaid',
  `createdtime` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedtime` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `user_id`, `date`, `paid_amount`, `due_date`, `payment_status`, `createdtime`, `updatedtime`) VALUES
(1, 1, '15/11/2023', '2000', '15/11/2023', 1, '2024-03-08 12:45:04', '2024-03-08 12:45:04'),
(2, 1, '15/11/2023', '2000', '15/11/2023', 1, '2024-03-08 13:19:38', '2024-03-08 13:19:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `due_date` varchar(255) DEFAULT NULL,
  `amount` varchar(255) NOT NULL,
  `interest` int(11) NOT NULL,
  `total_payable` varchar(255) NOT NULL,
  `createdtime` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedtime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `date`, `due_date`, `amount`, `interest`, `total_payable`, `createdtime`, `updatedtime`) VALUES
(1, 'Suresh', '15/11/2023', '15/11/2023', '20,000', 10, '22000', '2024-03-08 07:08:26', '2024-03-08 07:35:34'),
(2, 'Jo', '15/11/2023', '15/11/2023', '15000', 10, '150000', '2024-03-08 07:39:42', '2024-03-08 07:39:42'),
(3, 'Josh', '15/11/2023', '15/11/2023', '15000', 10, '150000', '2024-03-08 07:41:12', '2024-03-08 07:41:12'),
(4, 'kumar', '15/11/2023', '15/11/2023', '18000', 10, '19800', '2024-03-08 07:45:35', '2024-03-08 07:45:35'),
(5, 'raja', '15/11/2023', '15/11/2023', '15000', 10, '16500', '2024-03-08 07:47:12', '2024-03-08 07:47:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

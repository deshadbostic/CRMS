-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 11, 2023 at 03:32 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CRMS2`
--

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `Cust_ID` int(11) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `Age` int(11) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `EmailAddress` varchar(50) NOT NULL,
  `PhoneNumber` bigint(11) NOT NULL,
  `DrvLicenseNo` bigint(50) NOT NULL,
  `StateProvince` varchar(25) NOT NULL,
  `DrvExpire` date NOT NULL,
  `CreditC_No` bigint(16) NOT NULL,
  `BillingAddress` varchar(40) NOT NULL,
  `CreditC_Exp` date NOT NULL,
  `Pref_Veh_type` varchar(30) NOT NULL,
  `Rent_Dur` varchar(40) NOT NULL,
  `Rent_Pickup` varchar(100) NOT NULL,
  `Rent_Dropoff` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`Cust_ID`, `Name`, `Age`, `Address`, `EmailAddress`, `PhoneNumber`, `DrvLicenseNo`, `StateProvince`, `DrvExpire`, `CreditC_No`, `BillingAddress`, `CreditC_Exp`, `Pref_Veh_type`, `Rent_Dur`, `Rent_Pickup`, `Rent_Dropoff`) VALUES
(123456789, 'Patricia Holder', 30, 'Humble fields', 'patriciah@hotmail.com', 2468258563, 142534526, 'Bridgetown', '2025-04-02', 1732874812, 'Lot 167 Humble Fields Christ.Church', '2027-06-03', 'Nissan', '7 Days', 'Sheraton', 'Coverley');

-- --------------------------------------------------------

--
-- Table structure for table `Rentals_and_Returns`
--

CREATE TABLE `Rentals_and_Returns` (
  `Rental_ID` int(11) NOT NULL, 
  `rentalAgreementTerms` varchar(100) NOT NULL,
  `rental_Period` varchar(40) NOT NULL,
  `rental_Rate` float NOT NULL,
  `additional_Fees` float NOT NULL,
  `rental_Date` date NOT NULL,
  `_outstanding_Fees` float NOT NULL,
  `_rental_Status` tinyint(1) NOT NULL,
  `rental__returnDate` date NOT NULL,
  `preDamage_issues` varchar(100) NOT NULL,
  `newDamage_issues` varchar(100) NOT NULL,
  `amountCharged` float NOT NULL,
  `paymentMethod` varchar(20) NOT NULL,
  `outstandingBal_Cre` float NOT NULL,
  `Cust_ID` int(11) NOT NULL,
  `Veh_Vin` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Rentals_and_Returns`
--

INSERT INTO `Rentals_and_Returns` (`rentalAgreementTerms`, `rental_Period`, `rental_Rate`, `additional_Fees`, `rental_Date`, `_outstanding_Fees`, `_rental_Status`, `rental__returnDate`, `preDamage_issues`, `newDamage_issues`, `amountCharged`, `paymentMethod`, `outstandingBal_Cre`, `Cust_ID`, `Veh_Vin`) VALUES
('I agree', '7 days', 100, 50, '2023-04-10', 20, 1, '2023-04-17', 'none', 'none', 170, 'debit', 0, 123456789, '5N1AR1N25AC611339');

-- --------------------------------------------------------

--
-- Table structure for table `Vehicle`
--

CREATE TABLE `Vehicle` (
  `Year` int(11) NOT NULL,
  `Veh_Vin` varchar(30) NOT NULL,
  `Model` varchar(30) NOT NULL,
  `Make` varchar(30) NOT NULL,
  `Color` varchar(20) NOT NULL,
  `LPN` varchar(10) NOT NULL,
  `Availability` tinyint(1) NOT NULL,
  `Odometer` int(11) NOT NULL,
  `Cust_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Vehicle`
--

INSERT INTO `Vehicle` (`Year`, `Veh_Vin`, `Model`, `Make`, `Color`, `LPN`, `Availability`, `Odometer`, `Cust_ID`) VALUES
(2007, '5N1AR1N25AC611339', 'PathfinderXL', 'Nissan', 'Black', 'X4653', 1, 50000, 123456789);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`Cust_ID`);

--
-- Indexes for table `Rentals_and_Returns`
--
ALTER TABLE `Rentals_and_Returns`
  ADD KEY `rentals_and_returns_ibfk_1` (`Cust_ID`),
  ADD KEY `rentals_and_returns_ibfk_2` (`Veh_Vin`);

--
-- Indexes for table `Vehicle`
--
ALTER TABLE `Vehicle`
  ADD PRIMARY KEY (`Veh_Vin`),
  ADD KEY `Cust_ID` (`Cust_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Rentals_and_Returns`
--
ALTER TABLE `Rentals_and_Returns`
  ADD CONSTRAINT `rentals_and_returns_ibfk_1` FOREIGN KEY (`Cust_ID`) REFERENCES `Customer` (`Cust_ID`),
  ADD CONSTRAINT `rentals_and_returns_ibfk_2` FOREIGN KEY (`Veh_Vin`) REFERENCES `Vehicle` (`Veh_Vin`);

--
-- Constraints for table `Vehicle`
--
ALTER TABLE `Vehicle`
  ADD CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`Cust_ID`) REFERENCES `Customer` (`Cust_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

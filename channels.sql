
CREATE TABLE IF NOT EXISTS `channels` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(100) NOT NULL,
  `c_desc` text NOT NULL,
  `c_lat` varchar(10) NOT NULL,
  `c_lng` varchar(10) NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `channels`
--

INSERT INTO `channels` (`c_id`, `c_name`, `c_desc`, `c_lat`, `c_lng`) VALUES
(1, 'CH 101', 'Desc', '31.57', '74.32'),
(2, 'Channel 2', 'Desc', '31.57', '74.32'),
(3, 'Channel 3', 'Desc', '25.00', '67.00');

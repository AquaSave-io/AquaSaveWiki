---
sidebar_position: 5
---
# Proof of Sustainable Consumption (PSC)

Decentralized Physical Infrastructure Networks (DePIN) leverages blockchain technology to create a transparent and secure system that encourages sustainable water consumption practices across various sectors. This infrastructure forms the foundation for the development of the Proof of Sustainable Consumption (PSC), utilizing the Solana blockchain network for its high efficiency, low energy consumption, and minimal environmental impact. Solana provides the necessary scalability to handle the daily operations of AquaBank globally, ensuring that each transaction and shared data is recorded efficiently and securely.

The Proof of Sustainable Consumption is an algorithm designed to verify and reward efficient water use in households. It works as follows for the AquaBank Saver:

Data Generation: Each day, AquaBank records patterns of water consumption, quality, flow level, and pressure, as well as water saved in the recirculation and heating of hot water. These data are crucial for calculating water consumption, quality, and efficiency. They provide monetizable information that can be shared with key players and stakeholders.

Consumption (𝐶) 
C(t)=Volume of water used on day t where 𝐶(𝑡) is the consumption on day t, measured in liters or gallons.

Quality (𝑄)
Q(t)=w1​⋅pH(t)+w2​⋅Turbidity(t)+w3​⋅Contaminants(t) 
where 𝑤1,𝑤2 and 𝑤3​ are weights assigned to each parameter based on their importance, and 𝑄(𝑡) represents the overall water quality on day 𝑡.

Flow Level (𝐹)
F(t)=Rate of water flow on day t 
This measures the instantaneous flow rate at any given time 𝑡.

Pressure (𝑃)
P(t)=Water pressure on day t 
Pressure is typically measured in pounds per square inch (psi) or bar.

Temperature (𝑇)
T(t)=Water temperature on day t 
Temperature is typically measured in degrees Celsius (°C) or Fahrenheit (°F).


2. Secure Transmission: The generated data are sent to the Solana blockchain, where they are securely and transparently recorded. This record is immutable, ensuring that the data cannot be altered once written.

3. Daily Verification: The system automatically checks several times a day whether users are transmitting useful AquaBank data via the platform.

The daily verification algorithm checks whether the collected data meets predefined standards or thresholds:

Revised Daily Data Vector 𝐷(𝑡)
D(t)=[C(t),Q(t),F(t),P(t),T(t)]

To ensure the integrity and effectiveness of the Token Rewards system within the Proof of Sustainable Consumption (PSC), we're implementing robust verification measures as part of our revised daily data vector, 𝐷(𝑡). This will involve rigorous checks to ensure the accuracy and coherence of the data received, mitigating the risks associated with device farms and data manipulation.

Verification of Data Integrity
Each submission in 𝐷(𝑡), which includes measurements of water consumption, quality, flow, pressure, and temperature, will be assessed for veracity and coherence. To counteract potential issues such as device farms—where multiple devices are set up to fraudulently claim rewards—the system will:

Verify Authentic Data: Ensure that the data sent are plausible and consistent with expected measurements, using algorithms that detect anomalies or patterns indicative of falsified data submissions. The verification function for authentic data checks if the absolute difference between the daily data 𝐷(𝑡) and the historical mean (𝜇ℎ𝑖𝑠𝑡𝑜𝑟𝑖𝑐𝑎𝑙) is less than or equal to the historical standard deviation (𝜎ℎ𝑖𝑠𝑡𝑜𝑟𝑖𝑐𝑎𝑙)

Historical Data Comparison: Regularly compare current data against historical trends to detect any unnatural stability or lack of variation over time. This helps to identify devices that might be installed and left inactive to passively earn rewards without actual usage. This function examines whether the change in data (Δ𝐷(𝑡)) from previous measurements exceeds a predefined threshold (𝜃).

Monitoring Device Activity
To further prevent misuse, such as devices being inactive yet continuously connected to simulate engagement, the system will:
Activity Verification: Check that the devices are not only connected but actively monitoring and reporting changes. This involves periodic checks to confirm that new data are being generated and vary logically according to expected usage patterns. The activity verification function checks whether there are logical variations and updates in the data that match expected patterns of use.

4. Token Rewards: Users who meet the daily verification for responsible consumption and provide useful data are rewarded with AquaCoin (AQC) tokens. These tokens can be used within the AquaSave ecosystem to access new features, discounts, new services, investments, donations, purchase new hardware, or be traded on cryptocurrency markets.

Reward Allocation Based on Effective Data Transmission
Rewards will be closely tied to the effectiveness and regularity of data transmission:
Regular Data Submission: Tokens will be awarded based on the regularity and reliability of data submissions. This means that devices must consistently transmit data every time the server connects to perform verifications. The reward function determines the number of AQC tokens to be awarded based on the results of the verification functions. If all the verification functions for authentic data, historical variation, and activity return 1, then a fixed number of AQC tokens are awarded. If any of these checks fail, no tokens are awarded.
Connection Verification: Each device's connectivity and active participation in data reporting will be verified during each check-in by the server. Rewards will be distributed only if the device successfully sends data during these check-ins, ensuring the device is functioning and actively used. This function checks whether the device has successfully transmitted data during the server's check-in time. Depend of the times this connects will be rewarded acordinly.

Implementation Strategy
To implement these verification and reward mechanisms effectively:
Advanced Data Analytics Tools will be employed to analyze data submissions for consistency and to detect anomalies.
Blockchain Technology will be utilized not only for its security and transparency but also to enforce the integrity of the data recorded. This technology ensures that once data are entered into the blockchain, they cannot be altered, providing a reliable foundation for assessing device activity and data authenticity.
Smart Contracts on blockchain could automate the reward process, executing payouts only when specific conditions of data verification and device activity are met.

Benefits of the Proof of Sustainable Consumption:

Encourages Responsible Use: Rewards users who actively participate in water conservation. 
Transparency and Security: Blockchain technology ensures that all data are transparent, anonymous, and secure from tampering. 
Contributes to Global Sustainability: By encouraging the reduction of water and energy consumption, AquaSave contributes to global sustainability efforts. 
Community Engagement: Promotes a community of users committed to sustainable practices and the continuous improvement of their consumption habits.

The implementation of the Proof of Sustainable Consumption through the Solana blockchain is a crucial step toward building a more sustainable future. At AquaSave, we are dedicated to innovating and using technologies that not only improve water use efficiency but also protect our planet for future generations. We invite all AquaBank users to join us in this movement towards a more sustainable and responsible management of water resources.
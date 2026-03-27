<script setup lang="ts">
import { ref } from 'vue'
import VotingResult from '@/components/VotingResult.vue'
const votingResults = ref([
  {
    id: 1,
    candidate_number: 5,
    candidate_firstname: 'Pattama',
    candidate_surname: 'Lungkanee',
    political_party_id: 1,
    VotingResult: 'ไม่ได้รับการเลือกตั้ง',
  },
  {
    id: 2,
    candidate_number: 12,
    candidate_firstname: 'Somchai',
    candidate_surname: 'Srisuk',
    political_party_id: 2,
    VotingResult: 'ได้รับเลือกตั้ง',
  },
  {
    id: 3,
    candidate_number: 28,
    candidate_firstname: 'Malee',
    candidate_surname: 'Chaiyod',
    political_party_id: 3,
    VotingResult: 'รอผลการเลือกตั้ง',
  },
])
</script>

<template>
  <div class="container">
    <main class="content-card">
      <div class="filter-section">
        <label for="province-select">เลือกจังหวัดและเขตการเลือกตั้ง</label>
        <div class="custom-select">
          <select id="province-select">
            <option value="">กรุงเทพมหานคร</option>
            <option value="chiangmai">เชียงใหม่</option>
            <option value="phuket">ภูเก็ต</option>
          </select>
        </div>
        <div class="custom-select">
          <select id="province-select">
            <option value="">เขต 1</option>
            <option value="chiangmai">เขต 2</option>
            <option value="phuket">เขต 3</option>
          </select>
        </div>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>หมายเลขผู้สมัคร</th>
              <th>ชื่อผู้สมัคร</th>
              <th>พรรคการเมือง</th>
              <th>ผลการเลือกตั้ง</th>
            </tr>
          </thead>
          <tbody>
            <VotingResult
              v-for="votingResult in votingResults"
              :key="votingResult.id"
              :votingResult="votingResult"
            />
            <!-- <tr>
              <td>กรุงเทพมหานคร</td>
              <td class="area-text">ปัทมา ลงกานี</td>
              <td class="number-cell">1</td>
              <td class="number-cell">ไม่ได้รับเลือก</td>
            </tr>
            <tr>
              <td>Province</td>
              <td>Area Details</td>
              <td class="number-cell">2</td>
              <td class="number-cell">ไม่ได้รับเลือก</td>
            </tr>
            <tr>
              <td>Province</td>
              <td>Area Details</td>
              <td class="number-cell">3</td>
              <td class="number-cell">ไม่ได้รับเลือก</td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
  :root {
    --primary-color: #ffffff;
    --bg-color: #f0f2f5;
    --card-bg: #ffffff;
    --text-main: #2d3436;
    --text-muted: #636e72;
    --accent-color: #0984e3;
    --border-radius: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Sarabun', sans-serif;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-main);
    padding: 40px 20px;
    display: flex;
    justify-content: center;
  }

  .container {
    width: 100%;
    max-width: 1000px;
  }

  header h1 {
    font-size: 1.8rem;
    margin-bottom: 25px;
    color: #2d3436;
    font-weight: 600;
  }

  /* Tabs Styling */
  .tabs {
    display: flex;
    background: #e4e7eb;
    padding: 8px;
    border-radius: 20px;
    margin-bottom: 20px;
    gap: 5px;
  }

  .tab-item {
    flex: 1;
    padding: 12px;
    border: none;
    background: transparent;
    border-radius: 15px;
    cursor: pointer;
    font-weight: 500;
    color: var(--text-muted);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .tab-item.active {
    background: var(--card-bg);
    color: var(--text-main);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  /* Content Card */
  .content-card {
    background: var(--card-bg);
    border-radius: var(--border-radius);
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.8);
  }

  /* Dropdown Section */
  .filter-section {
    margin-bottom: 30px;
    text-align: center;
  }

  .filter-section label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 8px;
    color: var(--text-muted);
  }

  .custom-select {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
  }

  select {
    width: 100%;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid #dfe6e9;
    appearance: none;
    background: #fff;
    cursor: pointer;
    outline: none;
  }

  /* Table Styling */
  .table-container {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th {
    text-align: left;
    padding: 15px;
    font-size: 0.85rem;
    color: var(--text-muted);
    border-bottom: 1px solid #eee;
    font-weight: 400;
  }

  td {
    padding: 20px 15px;
    border-bottom: 1px solid #f9f9f9;
    font-size: 0.95rem;
  }

  .area-text {
    color: var(--text-muted);
    line-height: 1.6;
    max-width: 400px;
  }

  .number-cell {
    font-weight: 600;
    color: var(--accent-color);
  }

  tr:hover {
    background-color: #fcfcfc;
  }
}
</style>

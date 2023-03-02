import React from "react"
export default function Earthquake() {
          return (
              <div>
                <h3>Filter Earthquakes:</h3>
                <form onSubmit={this.handleSubmit}>
                <br/>
                <br/>
                  <label className="filter-column">Date Range:</label><br/>
                  <input type="date" name="min" /><br/>
                  <input type="date" name="max" /><br/>
                  <br/>
                <input type="submit" className="myButton"/>
              </form>
              </div>
    )
}